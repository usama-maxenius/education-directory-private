import { CANDIMAVEN_BASE_URL, programFields, schoolFields } from '@/appConstants';


interface IRequestBody {
    search_identifier: string,
}
export const getResults = async (data: IRequestBody) => {
    
    const body = {
        accesskey: process.env.NEXT_PUBLIC_ACCESS_KEY,
        search_identifier: data.search_identifier,
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(body)
    };
    try {
        const response = await fetch(`${CANDIMAVEN_BASE_URL}/results`, requestOptions);
        const searchResults = await response.json();
        const a: any = {};
        searchResults[0].map((program: any)=> {
            if(a[program.schoolid]) {
                const prg: any = extractData(programFields, program);
                a[program.schoolid].programs.push(prg);
            } else {
                const sch: any = extractData(schoolFields, program);
                const prg: any = extractData(programFields, program);
                a[program.schoolid] = {...sch, programs: [prg]};
            }
        });
        return Object.values(a);
        // if (searchResults) {
        //     const finalResults = await mergeSchoolPrograms(schoolPrograms[0]); 
        //     return finalResults;
        // }
    } catch (error) {
        console.log('error', error);

    }
};

const extractData = (theseFields: string[], from: any): object => {
    const data: any = {};
    theseFields.map((f: any)=> {
        data[f] = from[f];
    });
    return data;
};


