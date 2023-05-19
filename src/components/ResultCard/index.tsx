import { useEffect, useState, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { CANDIMAVEN_BASE_URL } from '@/appConstants';
import Image from 'next/image';
import Select from '../Select';
import Card from '../Card';
import LockIcon from '@/assets/icons/lockIcon.svg';
import styles from './index.module.css';

type SelectedProgramType = {
    online: boolean;
    program: string;
    questions: any[];
    result_identifier: string;
    answers: object;
};

interface IProps {
    school: any;
    submit: boolean;
    notIntrested: any;
};

const { TUCContainer, row, WIT, lock, footerLinks } = styles;

const ResultCard: React.FC<IProps> = ({school, submit, notIntrested}): JSX.Element => {
    const { searchIdentifier } = useContext(AppContext);
    const [selectedProgram, setSelectedProgram] = useState({} as SelectedProgramType);

    useEffect(()=> {
        if(submit) {
            const body = {
                ...searchIdentifier,
                search_result_identifier: selectedProgram.result_identifier,
                search_result_set_identifier: school.result_set_identifier,
                answers: selectedProgram.answers
            };
            console.log('body', body);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: JSON.stringify(body)
            };
            fetch(`${CANDIMAVEN_BASE_URL}/submit`, requestOptions).then((res)=> {
                console.log(res);
            }).catch(err=> {
                console.log(err);
            });
        }
    }, [submit]);

    return (
        <Card bgColor='white'>
            <div className={TUCContainer}>
                <div className={row} style={{marginBottom: 18}}>
                    {
                        school.additioanl_questions && 
                        <div className={lock}>
                            <Image src={LockIcon} width='38' height='48' alt='lock-icon' />
                        </div>
                    }
                    <Image
                        width={68}
                        height={52}
                        src={school.logo}
                        alt=''
                    />
                    <Select
                        onSelect={(program) => setSelectedProgram(school.programs.filter((p: any)=> p.result_identifier === program)[0])}
                        placeholder={'Select a Program'}
                        options={school.programs.map((program: any)=> ({title: program.program, value: program.result_identifier}))}
                        container={true}
                    />
                </div>
                {
                    selectedProgram?.['questions']?.map(question=> question.IsVisible && 
                        <div key={question.QuestionDescription} className={row}>
                            <Select
                                placeholder={question.QuestionLabel}
                                onSelect={(data)=> setSelectedProgram({...selectedProgram, answers: {...selectedProgram.answers, [question.QuestionLabel]: data}})}
                                options={question.QuestionOptions.map((opt: any)=> ({title: opt.OptionLabel, value: opt.OptionValue}))}
                            />
                            <p className={'text-base thankyou__additonInfoQuestion ' + WIT}>What is this?</p>
                        </div>
                    )
                }
            </div>
            <div className={footerLinks}>
                <span className='text-xs'>More information</span>
                <span className='text-xs' onClick={()=> notIntrested(school.schoolid)}>Not interested in {school.brand_name.length > 42? `${school.brand_name.substring(0, 42)}...`: school.brand_name}</span>
            </div>
        </Card>
    );
};

export default ResultCard;