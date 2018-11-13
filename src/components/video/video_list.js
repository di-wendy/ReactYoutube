import React, {Component} from 'react';
import VideoListItem from "./video_list_item";
import VideoDetail from "./video_detail";

export default class VideoList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            <VideoDetail video={this.props.selectedVideo} />
            <ul className='col-md-4 list-group'>
                {this.props.videos.map((video) => {
                    return (
                        <VideoListItem onChangeVideo={this.props.onChangeVideo} 
                        key={video.etag} video={video}/>
                    )
                })}
            </ul>
            </div>
        )
    }
}