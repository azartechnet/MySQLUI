import React  from 'react';



const EditPost = () => {
   


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Edit Post</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter title"
                                       
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body">Body</label>
                                    <textarea
                                        className="form-control"
                                        id="body"
                                        rows="5"
                                        placeholder="Enter body"
                                       
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Update Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;