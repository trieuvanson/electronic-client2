import React, {useState} from 'react';
import axios from "axios";
function Upload() {
    const [image, setImages] = useState([]);

    const uploadImage = () => {
        const formData = new FormData();
        for (let i = 0; i < image.length; i++) {
            formData.append("file", image[i])
            formData.append("upload_preset", "electronic")
            formData.append("folder", "electronic/slide")

            var config = {
                method: 'post',
                url: 'https://api.cloudinary.com/v1_1/trieuvanson/image/upload',
                headers: {
                },
                data: formData
            };

            axios(config)
                .then(function (response) {
                    var data = JSON.stringify({
                        "images_url": response.data.url,
                        "postion": (i+1)
                    });
                    var config1 = {
                        method: 'post',
                        url: 'http://localhost:8080/api/slide/',
                        headers: {
                            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUVlMiLCJyb2xlcyI6WyJBRE1JTl9ST0xFIiwiVVNFUl9ST0xFIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbG9naW4iLCJleHAiOjE2MzM1NDQ0NTR9.lAM0eQKjmpVuoQRBTYYb1jM7gESVcCZiL3zwxJXGu8k',
                            'Content-Type': 'application/json'
                        },
                        data : data
                    };

                    axios(config1).then(res => console.log(res));
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    return (
        <div>
            <input type="file" onChange={(e) => setImages(e.target.files)} multiple/>
            <button type="submit" className="btn btn-default" onClick={uploadImage}>Click</button>
            <img src="http://res.cloudinary.com/trieuvanson/image/upload/v1633422570/ogqmxyd8exriyvw8dpum.png"/>
        </div>
    )
}

export default Upload;