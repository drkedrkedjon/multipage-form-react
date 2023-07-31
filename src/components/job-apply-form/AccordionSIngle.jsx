/* eslint-disable react/prop-types */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "react-feather";

export default function AccordionSIngle({ header, content }) {
  return (
    <Accordion.Root type="single" collapsible={true}>
      <Accordion.Item value="item-1">
        {/* <Accordion.Header> */}
        <Accordion.Trigger>
          <ChevronDown />
          {header}
        </Accordion.Trigger>
        {/* </Accordion.Header> */}
        <Accordion.Content>{content}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
