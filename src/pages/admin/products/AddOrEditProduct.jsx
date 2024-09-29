import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';
import { addProductStart } from '../../../redux/action/product.action';

let initialState = {
  name: '',
  image: '',
  short_description: '',
  description: '',
  final_price: '',
  market_price: '',
  quantity: '',
  category: '',
  status: ''
}

export default function AddOrEditProduct() {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.category.categories);

  let [formData, setFormData] = useState(initialState);

  let {
    name,
    image,
    short_description,
    description,
    final_price,
    market_price,
    quantity,
    category,
    status
  } = formData

  const inputChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  const fileChange = (event) => {
    uploadFile(event.target.files[0]);
  }

  const uploadFile = (file) => {

    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            // console.log('Upload is paused');
            break;
          case 'running':
            // console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevValue) => ({
            ...prevValue,
            image: downloadURL
          }))
        });
      }
    );
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(formData);
 
    dispatch(addProductStart(formData))
  }

  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Add Product</div>
        <div><Link to="/admin/products" className='btn btn-success'>Back</Link></div>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name='name'
              value={name}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              className="form-control"
              type="file"
              id="image"
              name='image'
              onChange={fileChange} />

            {image && <div className='mt-2'><img src={image} style={{
              height: "50px"
            }} /></div>}
          </div>
          <div className='mb-3'>
            <label htmlFor="short_description">Short Description</label>
            <Editor
              onInit={(evt, editor) => { }}
              initialValue={short_description}
              init={{
                height: 300,
                menubar: false,
              }}
              onEditorChange={(newText) => setFormData((prev) => ({
                ...prev,
                short_description: newText
              }))}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="description">Description</label>
            <Editor
              onInit={(evt, editor) => { }}
              initialValue={description}
              init={{
                height: 300,
                menubar: false,
              }}
              onEditorChange={(newText) => setFormData((prev) => ({
                ...prev,
                description: newText
              }))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="form-label">Final Price</label>
            <input
              type="number"
              className="form-control"
              id="final_price"
              name='final_price'
              value={final_price}
              onChange={inputChange}
              step="any"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="form-label">Market Price</label>
            <input
              type="number"
              className="form-control"
              id="market_price"
              name='market_price'
              step="any"
              value={market_price}
              onChange={inputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name='quantity'
              value={quantity}
              onChange={inputChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="status">Category</label>
            <select
              className="form-control"
              id='status'
              name='category'
              defaultValue={category}
              onChange={inputChange}
            >
              <option hidden>Select Status</option>
              {
                categories.length > 0 && categories.map((category, index) => (
                  <option value={category.id} key={index}>{category.name}</option>
                ))
              }
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id='status'
              name='status'
              defaultValue={status}
              onChange={inputChange}
            >
              <option hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
