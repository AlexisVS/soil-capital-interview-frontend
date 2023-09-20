import {makeStyles} from 'tss-react/mui';

export default makeStyles()(() => {
    return {
        container: {
            width: '280px',
            margin: 'auto',
        },
        checkbox: {
            marginTop: '10px',
            '& > div': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
        forgotPasswordContainer: {
            display: 'inline-flex',
            alignItems: 'center',
        },
        forgotPasswordContainerLink: {
            marginTop: 0,
        }
    };
});
