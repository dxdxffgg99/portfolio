import Aurora from './Background/Aurora'
import './Background/Aurora.css'

export default function Background(){
  return(
    <div className='aurorabg'>
      <Aurora
        colorStops={["#3005b3", "#6af6f8", "#3c00ff"]}
        blend={0.8}
        amplitude={0.5}
        speed={0.45}
      />
    </div>
  );
}