import React from "react";
import MarkdownIt from "markdown-it";
import HTMLReactParser from "html-react-parser";

const jsxParser = HTMLReactParser;

export const Post = (props) => {
    let content;
    const markdown = new MarkdownIt('commonmark');
    const parser = new DOMParser();
    const postedAt = new Date();
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

    postedAt.setTime(props.data.created_utc);
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

    if (props.data.selftext) {
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{props.data.title}</h3>
                {markdown.render(props.data.selftextt)}
            </div>
            );
    } else if(props.data.media_embed) {
        const htmlString = props.data.media_embed.content.replace('&lt', '<').replace('&gt', '>').replace('&amp', '&');
       
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{props.data.title}</h3>
               {jsxParser(htmlString)}
            </div>
        )
    } else if(props.data.post_hint === 'image') {
        content = (
            <div className='post-content-container'>
                <h3 className="post-title">{props.data.title}</h3>
                <div className="post-img-mask"><img src={props.data.preview.images.source.url} alt="post image" /></div>
            </div>
        )
    };

    return (
         <div className="post-container">
            <div className="user-date-container">
                <img src={props.data.user.profile} alt="profil picture" className="post-profil-pic" />
                <p>Posted in {props.data.subreddit}  ●  {date}</p>
            </div>
            {content}
            <div className="post-action-bar">
                <button className="post-button comment-bubble"  onClick={onCommentClick}><i src={props.commentSymbol} /></button>
                <p>{commentNumberString}</p>
                <button className="post-button down-vote" onClick={onDownVoteClick}><i src={props.downVoteSymbol} /></button>
                <p>{votNumberString}</p>
                <button className="post-button up-vote" onClick={onUpVoteClick}><i src={props.upVoteSymbol} /></button>
            </div>
         </div>
    )
}