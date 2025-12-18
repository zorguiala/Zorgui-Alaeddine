import {
  Room,
  Desk,
  Monitor,
  Laptop,
  Toolbox,
  BookStack,
  Folder,
  DeskLamp,
  CoffeeMug,
  Plant,
  Keyboard,
  Mouse,
  PencilHolder,
  Notebook,
  Chair,
  Papers,
  Bookshelf,
} from './objects';

export const DeskScene = () => {
  return (
    <group>
      {/* Room environment */}
      <Room />

      {/* Main desk */}
      <Desk />

      {/* Interactive objects */}
      <Monitor />
      <Laptop />
      <Toolbox />
      <BookStack />
      <Folder />

      {/* Decorations */}
      <DeskLamp />
      <CoffeeMug />
      <Plant />
      <Keyboard />
      <Mouse />
      <PencilHolder />
      <Notebook />
      <Chair />
      <Papers />
      <Bookshelf />
    </group>
  );
};
