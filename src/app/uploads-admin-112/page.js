

import { cookies } from 'next/headers'
import UploadsPage from '@/components/uploadItems';

export default function Uploads(){
    const cookiesList = cookies()
    const hasCookie = cookiesList.has('logged_oldboyz');
    return(
        <>
           {hasCookie ?
            <>
                <UploadsPage />
            </>
            : <>
            <h1>You are not logged in</h1>
            <p>Please login first</p>
            <a href='/admin-login-112'>Login</a>
            </>
           }
           
        </>
    )
}