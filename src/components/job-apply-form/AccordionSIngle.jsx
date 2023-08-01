/* eslint-disable react/prop-types */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "react-feather";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function AccordionSIngle({ header, content }) {
  return (
    <Accordion.Root type="single" collapsible={true}>
      <Accordion.Item className="accordeon-border" value="item-1">
        <Accordion.Header asChild>
          <h4 className="accordeon-h4">
            <Accordion.Trigger className="accordeon-trigger">
              <ChevronDown />
              {header}
            </Accordion.Trigger>
          </h4>
        </Accordion.Header>
        <Accordion.Content className="accordion-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
