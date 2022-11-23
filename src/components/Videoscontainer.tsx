import { Ivideos } from "./Moviedetails";
import "../styles/videos.css";

interface Idataprops {
  datas: Ivideos | null;
}

export default function Videos(props: Idataprops) {
  return (
    <>
      {props.datas?.results.length == 0 ? null : (
        <div className="videos_container">
          <h2 className="videos_title">Vidéos</h2>
          <div className="videos_block">
            {props.datas?.results?.map((video) => (
              <div className="video_container">
                <object
                  data={`https://www.youtube.com/v/${video.key}`}
                ></object>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
