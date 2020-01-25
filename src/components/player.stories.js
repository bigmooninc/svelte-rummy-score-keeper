import Player from './Player.svelte';
import '../../public/index.css';

export default { title: 'Player' };

export const withText = () => ({
  Component: Player,
  props: {
    buttonText: 'some text'
  }
});
