import React, { useState } from "react";
import './AddContent.css'
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../../images/updateContent.jpg'


function AddContent() {

    let {id} = useParams();
    const navigate = useNavigate();

    const [lectureVideo, setLectureVideo] = useState("");
    const [lectureName, setLectureName] = useState("");
    const [lectureNote, setLectureNote] = useState("");

    const tenderQuestionFormHandler = async () => {
      
        try {
          const contentResponse = await axios.post(`http://localhost:3500/learnup/api/course-management/add-content/${id}`, {
            lectureVideo,
            lectureName,
            lectureNote
          });
      
          if (contentResponse.data) {
            toast.success("Your content has been added successfully!");
           
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      
      };

  return (
    <div className='add-content-main-container'>
        <div className='add-content-form-main-con'>
            <div className='add-content-form-con'>
                <div className="add-new-content-topic">
                    Add New Content
                </div>
            <div className="tender-proposal-set">
                <div className="label-box">
                  <label className="tender-proposal-label">Lecture Video</label>
                </div>
                <input
                  type="text"
                  className="tender-proposal-input"
                  placeholder="Video URL"
                  value={lectureVideo}
                  onChange={(e) => setLectureVideo(e.target.value)}
                />
              </div>

              <div className="tender-proposal-set">
                <div className="label-box">
                  <label className="tender-proposal-label">
                    Lecture Name
                  </label>
                </div>
                <input
                  type="text"
                  className="tender-proposal-input"
                  placeholder="Lecture Name"
                  value={lectureName}
                  onChange={(e) => setLectureName(e.target.value)}
                />
              </div>

              <div className="tender-proposal-set">
                <div className="label-box">
                  <label className="tender-proposal-label">
                    Lecture note
                  </label>
                </div>
                <input
                  type="text"
                  className="tender-proposal-input"
                  placeholder="Lecture Note"
                  value={lectureNote}
                  onChange={(e) => setLectureNote(e.target.value)}
                />
              </div>
                <div className="add-content-btn-container"
                onClick={() => tenderQuestionFormHandler()}>
              <div className="add-content-btn-form">  
                    <span className="add-content-btn-text">Add</span>   
              </div>
              </div>
            </div>
            <div className='add-content-image' style={{backgroundImage:`url(${Image1})`, backgroundSize:'cover'}}>

            </div>
        </div>
    </div>
  )
}

export default AddContent