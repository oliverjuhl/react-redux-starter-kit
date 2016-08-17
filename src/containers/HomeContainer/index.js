import { addPost } from '../../actions/index';
import Home from '../../components/Home';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (newPost) => {
    dispatch(addPost(newPost));
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
