import React, { useState } from "react";
import { CreateProjectModal, CreateBoard, BoardCard } from "../../Components";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import { useAuth } from "../../Context/AuthProvider";
export const Home = () => {
  const [showAddProjectModal, setshowAddProjectModal] = useState(false);
  const [showAddBoardModal, setshowAddBoardModal] = useState(false);
  const { user } = useAuth();
  const { addItem: addProject, data: projects } = useAxiosGet(
    "projects",
    user._id
  );
  const { addItem: addBoard, data: boards } = useAxiosGet("boards", user._id);
  return (
    <>
      <div className="flex-1 min-w-full bg-gray-700 text-white">
        <section className="space-y-5 px-10 py-5">
          <div className="">
            <div>
              <i className="fa fa-user-o text-lg mr-3" />
              <span className="text-xl  font-medium">Personal Boards</span>
            </div>
            <div className="flex flex-wrap">
              {boards?.map((board, index) => {
                return (
                  <div key={index}>
                    <BoardCard object={board} to="board" />
                  </div>
                );
              })}
              {showAddBoardModal ? (
                <CreateBoard
                  setShowModal={setshowAddBoardModal}
                  addBoard={addBoard}
                />
              ) : (
                <div
                  onClick={() => setshowAddBoardModal(true)}
                  className="w-60 h-32 text-center py-12 mt-6 bg-gray-200 text-gray-500 cursor-pointer"
                >
                  Create new board...
                </div>
              )}
            </div>
          </div>
          <div className="">
            <div>
              <i className="fa fa-users fa-outlined text-lg mr-3" />
              <span className="text-xl font-medium">Teams/Projects</span>
            </div>
            <div className="flex flex-wrap">
              {projects?.map((project, index) => {
                return (
                  <div key={index}>
                    <BoardCard object={project} to="project" />
                  </div>
                );
              })}
              <div
                onClick={() => {
                  setshowAddProjectModal(true);
                }}
                className="w-60 h-32 text-center py-12 mt-6 bg-gray-200 text-gray-500 cursor-pointer"
              >
                Create new project...
              </div>
            </div>
          </div>
        </section>
        {showAddProjectModal && (
          <CreateProjectModal
            setShowModal={setshowAddProjectModal}
            addProject={addProject}
          />
        )}
      </div>
    </>
  );
};
