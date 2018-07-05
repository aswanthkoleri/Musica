import React from 'react';

export default class Display extends React.Component {
    render() {
        const content= (
            <div>
            {
                this.props.results.map((results,index)=>{
            return ( 
            <div>
             <h3 key={index}>{results.snippet.title}</h3>
             <iframe src={`https://www.download-mp3-youtube.com/api/?api_key=MjI5MTIxMzQy&format=mp3&video_id=${results.id.videoId}&button_color=dddddd&text_color=444444`}></iframe>
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