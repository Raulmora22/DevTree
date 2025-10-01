import { Button } from "../ui/button";
import { FaGithub } from "@/assets/icons";
function wattermark() {
  return (
    <div className="justify-center items-center pt-5 flex">
      <a href="https://raulmora22.github.io/DevTree/" target="_blank">
        <Button variant={"link"} className="cursor-pointer" size={"icon"}>
          <FaGithub />
        </Button>
      </a>
    </div>
  );
}

export default wattermark;
