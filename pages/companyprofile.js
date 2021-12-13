
import Header2 from '../components/header2'
import {useAuth} from "../contexts/auth";
import CompanyCard from '../components/companycard'

export default function Companyprofile(props) {
    const {user, login , logout} = useAuth()
    console.log('hiiiiiiiiiii',user);
    return (
        <>
            <Header2/>
           
            <CompanyCard/>
           

        </>
    )
}
