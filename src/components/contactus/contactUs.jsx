import React from 'react';
import { Button } from 'react-bootstrap';

class ContactUs extends React.Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
    	return (
            <div>
                <div class="container" id="contactUS">
                    <div class="row">
                        <div class="col-sm-8">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                      placeholder="Name" />
                                   
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                      placeholder="Email" />
                                   
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                      placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                     <textarea class="form-control" rows="5" id="comment" 
                                     placeholder="Message"></textarea>
                                </div>
                                <div class="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUs;