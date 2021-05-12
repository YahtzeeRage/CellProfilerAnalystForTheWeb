import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import ScoreAllTable from './AbbyUIButtons/Score_Table';
import ScoreAllHistagram from './ScoreAllGraph'
import { Row} from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';


//TODO: need place to hold two graphs

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

//this components is for pop-up dialog display the 'confusion_matrix_canvas' for Evaluation button
export default function DialogForCanvas(props) {
	const [open, setOpen] = useState(false);
	
	const handleClickOpen = (props) => {
		props.handleScoreAll();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
		
			<Button variant="contained" onClick={() => handleClickOpen(props)}>
				Score All
			</Button>
			
			<Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} >
						
				{!props.scoreTableIsUpToDate ? (<CircularProgress
									 style={{ height: 40, width: 40, margin: 40 }}
								/>):
				(
				<div>
				<Row>

				<Tooltip title="Download CSV" aria-label="download">
					<IconButton
						// style={{ position: 'absolute', right: '50px', top: '10px' }}
						onClick={() => (console.log('hi'))}
						>
						<SaveIcon style={{color:'black'}}/>
						</IconButton>
				</Tooltip>
					
						<IconButton
							onClick={handleClose}
							style={{ position: 'absolute', right: '10px', top: '10px' }}
						>
						<CloseIcon style={{color:'black'}}/>
						</IconButton>
				</Row>
				<ScoreAllHistagram histogramData={props.histogramData}></ScoreAllHistagram>
				<ScoreAllTable scoreTable={props.scoreTable}></ScoreAllTable>
				</div>)
				}
			</Dialog>
		</div>
	);
}
