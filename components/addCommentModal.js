import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


export default function addCommentModal({ postid,show,handleClose }) {
    let userdata = JSON.parse(localStorage.getItem('userData'))
    const handleSubmit = e => {

        e.preventDefault();
        let data = {
            comment: e.target.comment.value,
            creator: userdata.user.id,
            on_post: postid

        }
        let config = {
            method: 'POST',
            baseUrl: process.env.NEXT_PUBLIC_API_URL_HOOKS_COMMENT,
        }
    }
    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { handleSubmit(e) }}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control name="comment" as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit" variant="primary">Save changes</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
