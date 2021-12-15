import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_API_URL_HOOKS_ACTIVITY

import { useAuth } from '../contexts/auth'

export default function useActiviyResources() {
    
    const { user,logout } = useAuth()
    const dataUser = JSON.parse(localStorage.getItem("userData"))
    console.log({dataUser})
    const token = dataUser.tokens.access
    console.log({token})
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

    async function createActivityResource(info) {

        try {
            await axios.post(apiUrl, info, config(token));
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

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
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
        activityResources: data,
        error,
        loading: token && !error && !data,
        createActivityResource,
        deleteResource,
        updateResource,
    }
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/
