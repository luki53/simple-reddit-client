import React from "react";
import MarkdownIt from "markdown-it";
import HTMLReactParser from "html-react-parser";
import moment from "moment";
import person from '../../assets/person-circle.svg';
import './post.css';
import commentBubble from '../../assets/comment-bubble.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';

const jsxParser = HTMLReactParser;

export const Post = ({data, subreddit}) => {
    let content;
    const aggreVots = data.downs + data.ups;
    const markdown = new MarkdownIt('commonmark');
    //const postedAt = new Date();
    // data.children[].data.selftext => listingRespons content data text
    // data.children[].data.subreddit => Where it was posted subreddit-name
    // data.children[].data.created_utc => timeStamp UTC
    // data.children[].data.num_comment => commentNumberString
    // data.children[].data.score => voteNumberString


    function onUpVoteClick() {

    }

    function onDownVoteClick() {
        
    }

    function onCommentClick() {
        
    }

    //postedAt.setTime(props.data.created_utc);
/**
 * In der Propertie "media" werden die Links zu den Preview pngs aufbewahrt.
 *  ==> data.children[].data.media
 *  in der property .typeHint wird die art des Mediums in einem String gehalten
 *  .still ist ein listing mit verschiedenen grössen des mediums z.B. small, lagrge, source...:
 * 
 * "media": {
 * "typeHint": "IMAGE", // Typen: "IMAGE", "VIDEO", null
 *    "still": {
 *        "source": {
 *            "url": "https://preview.redd.it/khqi4o7383fb1.jpg?auto=webp&s=98f95995d478db11a9dfd4c207907b7b23232fb6",
 *               "dimensions": {
 *                "width": 1080,
 *               "height": 1920
 *            }
 *        },
 *        "small": {
 *            "url": "https://preview.redd.it/khqi4o7383fb1.jpg?width=108&crop=smart&auto=webp&s=5092aa386d948849e931630aa2e2d2912a159380",
 *            "dimensions": {
 *                "width": 108,
 *                "height": 192
 *            }
 *        },
 * 
 * Bei videos muss unter der Eigenschaft packagedMedia.playbackMp4s.permutations nach den videos gesucht werden
 */
    if (data.selftext) {
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{data.title}</h3>
                {jsxParser(markdown.render(data.selftext))}
            </div>
            );
    } else if(data.media_embed && data.media_embed.content !== undefined) {
        
        const htmlString = data.media_embed.content.replace('&lt', '<').replace('&gt', '>').replace('&amp', '&');
        console.log(htmlString);
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{data.title}</h3>
               {jsxParser(htmlString)}
            </div>
        )
    } else if(data.post_hint === 'image') {
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{data.title}</h3>
                <div className="post-img-mask"><img src={data.url} alt="post" className="post-media-content"/></div>
            </div>
        )
    } else if(data.post_hint === 'hosted:video') {
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{data.title}</h3>
                <div className="post-img-mask"><video src={data.media.reddit_video.fallback_url} className="post-media-content" controls/></div>
            </div>
        )
    };

    return (
         <div className="post-container">
            <div className="post-user-data-container">
                <div className="post-user-data-img-mask"><img src={subreddit.data.icon_img ? subreddit.data.icon_img : person} alt="profil" className="post-user-data-img" /></div>
                <p className="post-info">Posted in {data.subreddit_name_prefixed
}  <div className="post-info-dot">●</div>  {moment.unix(data.created_utc).fromNow()}</p>
            </div>
            {content}
            <div className="post-action-bar">
                <button className="post-action-button comment-bubble"  onClick={onCommentClick}><img src={commentBubble} className="action-bar-icon" alt="comments"/></button>
                <p className="action-bar-string">{data.num_comments} Commments</p>
                <button className="post-action-button down-vote" onClick={onDownVoteClick}><img src={arrowDown} className="action-bar-icon" alt="vote up"/></button>
                <p className="action-bar-string">{aggreVots}</p>
                <button className="post-action-button up-vote" onClick={onUpVoteClick}><img src={arrowUp} className="action-bar-icon" alt="vote down"/></button>
            </div>
         </div>
    )
}