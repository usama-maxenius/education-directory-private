import { CANDIMAVEN_BASE_URL } from '@/appConstants';
// import { SubmitAPIInfo } from '..//thank-you';
// import { mergeSchoolPrograms } from './mergeSchoolPrograms';



export const submitAPI = async (data: any) => {
    console.log('coming', data);
    const body = {
        accesskey: data.accesskey,
        search_identifier: data.search_identifier,
        search_result_identifier: data.search_result_identifier,
        search_result_set_identifier: data.search_result_set_identifier,
        answers: data.answers,

    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(body)
    };
    try {
        const response = await fetch(`${CANDIMAVEN_BASE_URL}/submit`, requestOptions);
        const submitResponse = await response.json();
        console.log(submitResponse);
        return submitResponse;
    } catch (error) {
        console.log('error', error);

    }
};



