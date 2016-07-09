import { addPost } from '../../actions/index';
import HomeView from '../../components/HomeView';
import { connect } from 'react-redux';

const emptyObject = {};

const mapStateToProps = () => emptyObject;

const mapDispatchToProps = (dispatch) => ({
  handleClick: (newPost) => {
    dispatch(addPost(newPost));
  }
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);

export default Home;
