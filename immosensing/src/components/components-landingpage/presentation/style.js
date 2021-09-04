import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    mainCont:{
        padding: '5rem 4rem',
        display: 'flex',
        flexDirection:'column',
    },
    mainContainerWho: {
        width: '80%', 
        margin: 'auto',
    },
    titlePresentation:{
        width:'100%',
        margin:'auto',
        textAlign:'center',
    },
    misionTitle:{
      margin:'auto',
    },
    containerText:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
    },
    containerTextPresentation:{
        margin:'1rem',
    },
    textParagraph:{
        margin: '2rem auto',
        padding: '2rem',
        fontSize: '1.2rem',
    },

    root: {
        flexGrow: 1,
        minWidth: '50%',
        margin: '1rem',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
    },
    img: {
        height: '50vh',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },

}));