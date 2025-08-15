import { Page } from "../models/pageSchema.js";

export const getPageContent = async (req, res) => {
  try {
    const { pageName = "" } = req.params;
    if (!pageName.trim()) {
      return res.status(400).json({
        success: false,
        data: "",
        error: "Page name is required",
      });
    }

    const page = await Page.findOne({ pagename: pageName });
    const content = page ? page.content : "";

    return res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const savePageContent = async (req, res) => {
  try {
    const { pageName = "" } = req.params;
    const { content = "" } = req.body;

    if (!pageName.trim()) {
      return res.status(400).json({
        success: false,
        error: "Page name is required",
      });
    }

    const page = await Page.findOneAndUpdate(
      { pagename: pageName },
      { content },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      data: page.content || "",
    });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
