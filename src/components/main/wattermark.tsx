import { Button } from "../ui/button";
import { FaGithub } from "@/assets/icons";
import { DevTreeConfig } from "@/config";

function wattermark() {
  return (
    <div className="justify-center items-center pt-4 flex">
      <a href="https://github.com/Raulmora22/DevTree" target="_blank">
        <Button
          className={`${DevTreeConfig.RoundedOptions} cursor-pointer`}
          size={"icon"}
          variant="outline"
        >
          <FaGithub />
        </Button>
      </a>
    </div>
  );
}

export default wattermark;
