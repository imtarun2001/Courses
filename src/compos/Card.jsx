import React from 'react';
import './Card.css';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function likeHandler() {
        if(likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) =>(cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            if(likedCourses.length===0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked successfully");
        }
    }
  return (
    <div className='card'>
        <div className='img-holder'>
            <img src={course.image.url} alt='cant fetch'/>
        </div>
        <div>
            <button className='btn-holder' onClick={likeHandler}>{likedCourses.includes(course.id) ? <FcLike className='like-btn'/>:<FcLikePlaceholder className='like-btn'/>}</button>
        </div>
        <h3 className='title-holder'>{course.title}</h3>
        <div className='description-holder'>
            <p>{course.description.slice(0,200)+'...'}</p>
        </div>
    </div>
  )
}

export default Card