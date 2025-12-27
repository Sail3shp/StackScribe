import { useState,useRef,useMemo,useCallback } from "react";
import JoditEditor from 'jodit-react'
import { useDispatch } from "react-redux";
import { createBlog } from "../app/blogSlice";


const AddBlogPage = () => {
    const editor = useRef(null)
    //const [content,setContent] = useState()
    const [formData,setFormData] = useState({
        title:'',
        content:''
    })
    const dispatch = useDispatch()

    const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typing...',
      buttons: [
        'bold',
        'italic',
        'underline',
        '|',
        'ul',
        'ol',
        '|',
        'font',
        'fontsize',
        'brush',
        '|',
        'link',
        '|',
        'align',
        'undo',
        'redo'
      ],
      height: 400,
      uploader: {
        insertImageAsBase64URI: true
      }
    }),
    []
  )

  const handleBlur = useCallback((newContent) => {
    setFormData(prev => 
        ({...prev,
       content:newContent 
    }));
  }, []);

  const handleChange = useCallback((newContent) => {
    setFormData(prev => ({
        ...prev,
        content:newContent 
    }))
  }, [])

  const handleTitleChange = (e) => {
    setFormData(prev => ({
        ...prev,
        title:e.target.value
    }))
  }
  
  const handleSubmit = () => {
    dispatch(createBlog(formData))

  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-medium text-center my-5">Write your article</h1>
      <label htmlFor="title">Title</label>
      <input type="text" 
      id="title"
       className="p-2 w-full bg-neutral-100 my-5 border border-neutral-300"
       value={formData.title}
       onChange={handleTitleChange}
      />
      <JoditEditor
        ref={editor}
        value={formData.content}
        config={config}
        tabIndex={1}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <button 
      onClick={handleSubmit}
      className=" cursor-pointer rounded-md bg-green-400 p-1 my-5">Submit</button>
    </div>
  )
}

export default AddBlogPage