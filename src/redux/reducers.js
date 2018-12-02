import { combineReducers} from 'redux';
import { QUESTION_ANSWER} from './actions';
import { CHANGE_QUESTION} from './actions';
import { SUBMIT} from './actions';
import { INIT_QUESTIONS} from './actions';

function score(state = 0, action = {}) {
	switch (action.type) {
		case SUBMIT:
			var score=state;
			action.payload.questions.map((question,i)=>{
				if (typeof question.userAnswer !== "undefined"){
					if (question.answer.trim().toLowerCase()===question.userAnswer.trim().toLowerCase()) {
						score=score+1;
					}
				}
			})
			console.log(score)
			return score;

		case INIT_QUESTIONS:
			state = 0;
			return state;

		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch (action.type) {

		case SUBMIT:
			state=true;
			return state;

		case INIT_QUESTIONS:
			state = false;
			return state;

		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch (action.type) {

		case CHANGE_QUESTION:
			var index=action.payload.index;
			state = index;
			return state;

		case INIT_QUESTIONS:
			state = 0;
			return state;

		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch (action.type) {
		case QUESTION_ANSWER:
			return state.map((question,i) => {

				return  { ...question,
							userAnswer: action.payload.index===i ?
										action.payload.answer : question.userAnswer}
			});

		case INIT_QUESTIONS:
			var questions = action.payload.questions;
			state = questions;
			return state;

		default:
			return state;
	}
}


const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions
}));

export default GlobalState;