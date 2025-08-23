import { useEffect, useState, type ChangeEvent } from "react";
import "./Content.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components";

let saveTimer: ReturnType<typeof setTimeout>;

const Content = () => {
  const [content, setContent] = useState("");
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const getContent = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${apiUrl}/content${location.pathname}`);
      setContent(res.data?.data || "");
    } catch (error) {
      console.error("Error while fetching content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveContent = async (text: string) => {
    try {
      await axios.post(`${apiUrl}/content${location.pathname}`, {
        content: text,
      });
      console.log("Content saved successfully");
    } catch (error) {
      console.error("Error while saving content:", error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    
    //debouncing...
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveContent(value);
    }, 1000);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <textarea
      className="content__textarea"
      value={content}
      onChange={handleContentChange}
    />
  );
};

export default Content;