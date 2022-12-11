import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const SiteTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink>Sites</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>My Sites</Heading>
      <AddSiteModal>+ Add site</AddSiteModal>
    </Flex>
  </>
);

export default SiteTableHeader;
