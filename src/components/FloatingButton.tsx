import React, { type ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  children: React.ReactNode;
}

function FloatingButton(props: Props) {
  return (
    <button
      className="p-2 text-zinc-300 hover:text-zinc-50 hover:bg-zinc-500 text-sm flex items-center gap-1.5 font-medium leading-none data-[active=true]:text-amber-500"
      {...props}
    />
  );
}

export default FloatingButton;
