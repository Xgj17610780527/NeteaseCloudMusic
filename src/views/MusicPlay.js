/**
 * Created by Administrator on 2019/9/20 0020.
 */
import React from 'react'
import AudioPlay from '../components/AudioPlay'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            musicList: [
                {
                    id: "1",
                    title: "打上花火",
                    info: "DAOKO,米津玄師",
                    resource: require("../resource/DAOKO,米津玄師 - 打上花火.mp3"),
                    time: "04:50",
                    img: "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
                },
                {
                    id: "2",
                    title: "渡月橋 ~君 想ふ~",
                    info: "倉木麻衣",
                    resource: require("../resource/倉木麻衣 - 渡月橋 ~君 想ふ~.mp3"),
                    time: "04:50",
                    img: "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
                },
                {
                    id: "3",
                    title: "美丽的神话Ⅰ",
                    info: "成龙,金喜善",
                    resource: require("../resource/成龙,金喜善 - 美丽的神话Ⅰ.mp3"),
                    time: "04:50",
                    img: "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
                }
            ]
        };
    }
    // 删除指定音乐
    onDeleteMusic = id => {
        const { musicList } = this.state;
        const newMusicList = [];
        musicList.forEach(item => {
            if (item.id !== id) {
                newMusicList.push(item);
            }
        });
        this.setState({ musicList: newMusicList });
    };
    // 删除全部音乐
    onDeleteAllMusic = () => {
        this.setState({ musicList: [] });
    };

    render() {
        const { musicList } = this.state;
        return (
            <div>
                <p>{this.props.match.params}</p>
                <div className="App-Content">
                    <AudioPlay
                        musicList={musicList}
                        onDeleteMusic={this.onDeleteMusic}
                        onDeleteAllMusic={this.onDeleteAllMusic}
                    />
                </div>
            </div>
        );
    }
}
export default App;