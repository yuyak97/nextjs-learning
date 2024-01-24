import Button from '@/components/common/button';

const HeaderButtons = () => {
  return (
    <div>
      <Button 
        text="Sign In" 
        styles="bg-blue-500 hover:bg-blue-700 text-white rounded-l"
        onClick={() => console.log("Sign In Clicked")} 
      />
      <Button 
        text="Sign Up" 
        styles="bg-green-500 hover:bg-green-700 text-white rounded-r"
        onClick={() => console.log("Sign Up Clicked")} 
      />
    </div>
  );
};

export default HeaderButtons;
