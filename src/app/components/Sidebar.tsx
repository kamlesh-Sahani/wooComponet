"use client";
import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa6";

const Sidebar = () => {
  const arr = [
    {
      component: [
        {
          button: [
            "normal button",
            "shaded button",
            "rounded button",
            "icon button",
          ],
          input: ["radio", "check box", "normal", "text area", "select"],
          card: ["basic card", "image card", "profile card", "product card"],
        },
      ],
      template: [
        {
          ecommerce: [
            "dark template",
            "normal template",
            "minimal template",
            "colorful template",
          ],
          blog: ["classic blog", "modern blog", "photo blog"],
          portfolio: [
            "simple portfolio",
            "creative portfolio",
            "professional portfolio",
          ],
        },
      ],
      layout: [
        {
          header: ["fixed header", "sticky header", "transparent header"],
          footer: ["simple footer", "detailed footer", "social media footer"],
          sidebar: ["left sidebar", "right sidebar", "collapsible sidebar"],
        },
      ],
    },
  ];

  const initializeExpandedState = (categories: any) => {
    const state: { [key: string]: boolean } = {};
    categories.forEach((category: any) => {
      Object.keys(category).forEach((key) => {
        state[key] = true; // Set all categories to expanded
      });
    });
    return state;
  };

  const [expandedCategories, setExpandedCategories] = useState(initializeExpandedState(arr));
  const [expandedSubcategories, setExpandedSubcategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  const toggleSubcategory = (subCategoryName: string) => {
    setExpandedSubcategories((prevState) => ({
      ...prevState,
      [subCategoryName]: !prevState[subCategoryName],
    }));
  };

  return (
    <div className="bg-[#000000] text-[#eaeaea] p-8 w-1/4 h-screen flex flex-col gap-10 overflow-auto">
      <div>
        <h1 className="text-2xl font-semibold cursor-pointer">WooComponent</h1>
      </div>
      {arr.map((category, i) => (
        <SidebarComponent
          key={i}
          category={category}
          expandedCategories={expandedCategories}
          expandedSubcategories={expandedSubcategories}
          toggleCategory={toggleCategory}
          toggleSubcategory={toggleSubcategory}
        />
      ))}
    </div>
  );
};

export default Sidebar;

const SidebarComponent = ({
  category,
  expandedCategories,
  expandedSubcategories,
  toggleCategory,
  toggleSubcategory,
}: any) => {
  return (
    <div className="flex flex-col gap-7 pl-5">
      {Object.keys(category).map((categoryName, i) => (
        <div key={i} className="flex flex-col gap-5">
          <h3
                      className="font-semibold text-xl cursor-pointer flex justify-between pl-1"
                      onClick={() => toggleSubcategory(categoryName)}
                    >
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}{" "}
            {expandedCategories[categoryName] ? <FaAngleDown /> : <FaAngleRight />}
          </h3>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              expandedCategories[categoryName] ? "max-h-screen" : "max-h-0"
            }`}
          >
            {category[categoryName].map((subCategory: any, j: any) => (
              <div key={j} className="flex flex-col gap-4">
                {Object.keys(subCategory).map((subCategoryName, k) => (
                  <div key={k}>
                    <h3
                      className="font-semibold text-xl cursor-pointer flex justify-between pl-7"
                      onClick={() => toggleSubcategory(subCategoryName)}
                    >
                      {subCategoryName.charAt(0).toUpperCase() + subCategoryName.slice(1)}{" "}
                      {expandedSubcategories[subCategoryName] ? <FaAngleDown /> : <FaAngleRight />}
                    </h3>
                    <div
                      className={` pl-14 gap-1 mt-2 flex flex-col  transition-max-height duration-500 ease-in-out overflow-hidden ${
                        expandedSubcategories[subCategoryName] ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      {subCategory[subCategoryName].map((item: any, l: any) => (
                        <p className="font-normal text-xl cursor-pointer transition-max-height duration-500 ease-out overflow-hidden " key={l}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
