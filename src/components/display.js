import React from 'react';

export default class Display extends React.Component {
    render() {
        const content= (
            <div className="result">
            {
                this.props.results.map((results,index)=>{
            return ( 
            <div key={index}>
             <h3 >{results.snippet.title}</h3>
             <iframe className="downloadButton" src={`https://www.download-mp3-youtube.com/api/?api_key=MjI5MTIxMzQy&format=mp3&video_id=${results.id.videoId}&button_color=2b6fa7&text_color=#e7e7e7`}></iframe>
             </div>
           );
                })
            }
            </div>
        );
        return content;
    }
}
/* <div class="item">
    <h3>{{title}}</h3>
        

</div> */