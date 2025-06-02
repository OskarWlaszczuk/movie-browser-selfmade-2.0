import axios from "axios";

export const fetchFromAPI = async <ResponseType>(url: string): Promise<ResponseType> => {
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTYxZDVhMWQ5OGRiYjlmZTQ1MmRkYmI5ZjY0Yzk2OSIsIm5iZiI6MTcyMzAzNzg2Ni4wODUsInN1YiI6IjY2YjM3OGFhNWQ4M2FhNTA1ZTI3ZDMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1WAl4QsNEZhR_4-FocLBojz0ujdAJxd6Jjtjjgx6-Lg'
        }
    };

    const response = await axios.get<ResponseType>(url, options);
    return response.data;
};


export const fetchFromAPIs = async <ResponseType>(urls: string[]): Promise<ResponseType> => {
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTYxZDVhMWQ5OGRiYjlmZTQ1MmRkYmI5ZjY0Yzk2OSIsIm5iZiI6MTcyMzAzNzg2Ni4wODUsInN1YiI6IjY2YjM3OGFhNWQ4M2FhNTA1ZTI3ZDMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1WAl4QsNEZhR_4-FocLBojz0ujdAJxd6Jjtjjgx6-Lg'
        }
    };

    const responses = await Promise.all(
        urls.map(url => axios.get(url, options).then(res => res.data))
    );    // @ts-ignore
    return responses;
};


// const fetchMoviesByIds = async (ids: number[]) => {
//   const responses = await Promise.all(
//     ids.map(id => axios.get(`/api/movies/${id}`))
//   );

//   return responses.map(res => res.data);
// };