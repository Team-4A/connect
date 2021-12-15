import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_API_URL_HOOKS_POST
console.log(apiUrl)
import { useAuth } from '../contexts/auth'

export default function usePostResource() {
    
    const { user,logout } = useAuth()
    const dataUser = JSON.parse(localStorage.getItem("userData"))

    const token = dataUser.tokens.access

    const { data, error, mutate } = useSWR([apiUrl, token], fetchResource);
    
    async function fetchResource(url,token) {
        
        if (!token) {
            return;
        }

        try {
            const response = await axios.get(url, config(token));
            console.log("form useResource",response.data)
            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createPostResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updatePostResource(resource) {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL_HOOKS_POST
        try {
            await axios.put(apiUrl+`/${resource.id}/post_detail`, resource, config(token));
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config(token) {

        return {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    }

    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        loading: token && !error && !data,
        createPostResource,
        deleteResource,
        updatePostResource,
        fetchResource,
    }
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/
