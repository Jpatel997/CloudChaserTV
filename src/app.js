function App() {

    const [videoSrc, setVideoSrc] = React.useState("beach.mp4"); // Default video
    const [tags, setTags] = React.useState(["TAG 1", "TAG 2", "TAG 3", "TAG 4", "TAG 5"]); // Default tags
    const [uploader, setUploader] = React.useState("Uploader Name"); // Default uploader
    
    return (
        <div className="tc">
            <div className="wrapper">
                <div className="video-container">
                    <video id="videoPlayer" controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>

                <div className="controls-container">
                    <div className="upload-btn-container">
                        <button className="uploadUser-btn">{uploader}</button>
                    </div>

                    <div className="tag-container">
                        {tags.map((tag, index) => (
                            <button key={index} className="tag-btn">{tag}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
