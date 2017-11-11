import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyAJXKUFUcxUdkLQfOri_B1tdVSW3QN_jEA';

// Create a new component. This component should produce some HTML
// const App = () => {
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     );
// };
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            })
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return (
            <div>
                {/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

// Take this component's generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
