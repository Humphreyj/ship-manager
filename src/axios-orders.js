import axios from 'axios';

const instance =  axios.create({
	baseURL:'https://pirates-c17bc.firebaseio.com/'

})

export default instance;