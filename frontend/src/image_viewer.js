/**
 * Created by Edgar on 27/11/2017.
 */
import small from '../assets/small.jpg';
import '../styles/image_viewers.css';

export  default () => {

    const image = document.createElement('img');
    image.src = small;

    document.body.appendChild(image);
};



