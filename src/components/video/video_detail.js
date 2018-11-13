import React, {Component} from 'react';

export default class VideoDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let link = (this.props.video) ? this.props.video.id.videoId : '';
        let title = (this.props.video) ? this.props.video.snippet.title : '';
        let desceiption = (this.props.video) ? this.props.video.snippet.desceiption : '';
        return <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={`https://www.youtube.com/embed/${link}`}></iframe>
            </div>
            <div className='detail'>
                <div>{title}</div>
                <div>{desceiption}</div>
            </div>
        </div>
    }
}