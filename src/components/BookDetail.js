import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap"
import bookService from "../services/bookService"

function BookDetail({ book }) {
    const [body, setBody] = useState('')

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        bookService.getAllReviews(book._id)
            .then(res => {
                setReviews(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const AddReview = (e) => {
        e.preventDefault()
        bookService.createReview(book._id, { body: body })
            .then(res => {
                console.log(res.data)
            }).catch(err => console.log(err))
    }
    console.log(book)
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {book.title}
                    </CardTitle>
                    <CardText>
                        {book.author}
                    </CardText>
                </CardBody>
                <ListGroup flush>
                    {reviews.map(review => {
                        return (
                            <ListGroupItem key={review._id}>
                                {review.body} by {review.reviewer.username}
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
                <Form>
                    <FormGroup>
                        <Label for="review">
                            Review
                        </Label>
                        <Input
                            id="review"
                            name="review"
                            placeholder="enter your review here"
                            type="text"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </ FormGroup >
                    <Button color="primary" onClick={(e) => AddReview(e)}>
                        add review
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default BookDetail