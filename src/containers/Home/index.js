import { addPost } from '../../actions/index';
import HomeView from '../../components/HomeView';
import { connect } from 'react-redux';

/*eslint-disable */
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (newPost) => {
      dispatch(addPost(newPost));
    }
  };
};
/*eslint-disable */

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);

export default Home;
