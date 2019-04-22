
const tags = [
  { label: '100', value: 'Heading - Personal Name (NR)' },
  { label: '101', value: 'unassigned' },
  { label: '109', value: 'unassigned' },
  { label: '110', value: 'Heading - Corporate Name (NR)' },
  { label: '111', value: 'Heading - Meeting Name (NR)' },
  { label: '112', value: 'unassigned' },
  { label: '129', value: 'unassigned' },
  { label: '130', value: 'Heading - Uniform Title (NR)' },
  { label: '131', value: 'unassigned' },
  { label: '139', value: 'unassigned' },
  { label: '140', value: 'Uniform Title' },
  { label: '141', value: 'unassigned' },
  { label: '142', value: 'unassigned' },
  { label: '143', value: 'Collective Title' },
  { label: '144', value: 'unassigned' },
  { label: '146', value: 'unassigned' },
  { label: '147', value: 'Heading - Named Event (NR)' },
  { label: '148', value: 'Heading - Chronological Term (NR)' },
  { label: '149', value: 'unassigned' },
  { label: '150', value: 'Heading - Topical Term (NR)' },
  { label: '151', value: 'Heading - Geographic Name (NR)' },
  { label: '152', value: 'unassigned' },
  { label: '154', value: 'unassigned' },
  { label: '155', value: 'Heading - Genre/Form Term (NR)' },
  { label: '156', value: 'unassigned' },
  { label: '161', value: 'unassigned' },
  { label: '162', value: 'Heading - Medium of Performance Term (NR)' },
  { label: '163', value: 'unassigned' },
  { label: '179', value: 'unassigned' },
  { label: '180', value: 'Heading - General Subdivision (NR)' },
  { label: '181', value: 'Heading - Geographic Subdivision (NR)' },
  { label: '182', value: 'Heading - Chronological Subdivision (NR)' },
  { label: '183', value: 'unassigned' },
  { label: '184', value: 'unassigned' },
  { label: '185', value: ' Heading - Form Subdivision (NR)' },
  { label: '186', value: 'unassigned' },
  { label: '199', value: 'unassigned' },
  { label: '200', value: 'unassigned' },
  { label: '259', value: 'unassigned' },
  { label: '260', value: 'Complex See Reference - Subject (R)' },
  { label: '261', value: 'unassigned' },
  { label: '299', value: 'unassigned' },
  { label: '300', value: 'unassigned' },
  { label: '335', value: 'unassigned' },
  { label: '336', value: 'Content Type  (R)' },
  { label: '337', value: 'unassigned' },
  { label: '347', value: 'unassigned' },
  { label: '348', value: 'Format of Notated Music (R)' },
  { label: '349', value: 'unassigned' },
  { label: '359', value: 'unassigned' },
  { label: '360', value: 'Complex See Also Reference - Subject (R)' },
  { label: '361', value: 'unassigned' },
  { label: '367', value: 'unassigned' },
  { label: '368', value: 'Other Attributes of Person or Corporate Body (R)' },
  { label: '369', value: 'unassigned' },
  { label: '370', value: 'Associated Place (R)' },
  { label: '371', value: 'Address  (R)' },
  { label: '372', value: 'Field of Activity (R)' },
  { label: '373', value: 'Associated Group (R)' },
  { label: '374', value: 'Occupation (R)' },
  { label: '375', value: 'Gender (R)' },
  { label: '376', value: 'Family Information (R)' },
  { label: '377', value: 'Associated Language (R)' },
  { label: '378', value: 'Fuller Form of Personal Name (NR)' },
  { label: '379', value: 'unassigned' },
  { label: '380', value: 'Form of Work (R)' },
  { label: '381', value: 'Other Distinguishing Characteristics of Work or Expression (R)' },
  { label: '382', value: ' Medium of Performance (R)' },
  { label: '383', value: 'Numeric Designation of Musical Work (R)' },
  { label: '384', value: 'Key (NR)' },
  { label: '385', value: 'Audience Characteristics (R)' },
  { label: '386', value: 'Creator/Contributor Characteristics (R)' },
  { label: '387', value: 'unassigned' },
  { label: '388', value: 'Time Period of Creation (R)' },
  { label: '389', value: 'unassigned' },
  { label: '399', value: 'unassigned' },
  { label: '400', value: 'See From Tracing - Personal Name (R)' },
  { label: '401', value: 'unassigned' },
  { label: '409', value: 'unassigned' },
  { label: '410', value: 'See From Tracing - Corporate Name (R)' },
  { label: '411', value: 'See From Tracing - Meeting Name (R)' },
  { label: '412', value: 'unassigned' },
  { label: '429', value: 'unassigned' },
  { label: '430', value: 'See From Tracing - Uniform Title (R)' },
  { label: '431', value: 'unassigned' },
  { label: '446', value: 'unassigned' },
  { label: '447', value: 'See From Tracing - Named Event (R)' },
  { label: '448', value: 'See From Tracing - Chronological Term (R)' },
  { label: '449', value: 'unassigned' },
  { label: '450', value: 'See From Tracing - Topical Term (R)' },
  { label: '451', value: 'See From Tracing - Geographic Name (R)' },
  { label: '452', value: 'unassigned' },
  { label: '454', value: 'unassigned' },
  { label: '455', value: 'See From Tracing - Genre/Form Term (R)' },
  { label: '456', value: 'unassigned' },
  { label: '461', value: 'unassigned' },
  { label: '462', value: 'See From Tracing - Medium of Performance Term (R)' },
  { label: '463', value: 'unassigned' },
  { label: '479', value: 'unassigned' },
  { label: '480', value: 'See From Tracing - General Subdivision (R)' },
  { label: '481', value: 'See From Tracing - Geographic Subdivision (R)' },
  { label: '482', value: 'See From Tracing - Chronological Subdivision (R)' },
  { label: '483', value: 'unassigned' },
  { label: '484', value: 'unassigned' },
  { label: '485', value: 'See From Tracing - Form Subdivision (R)' },
  { label: '486', value: 'unassigned' },
  { label: '499', value: 'unassigned' },
  { label: '500', value: 'See Also From Tracing - Personal Name (R)' },
  { label: '501', value: 'unassigned' },
  { label: '509', value: 'unassigned' },
  { label: '510', value: ' See Also From Tracing - Corporate Name (R)' },
  { label: '511', value: ' See Also From Tracing - Meeting Name (R)' },
  { label: '512', value: 'unassigned' },
  { label: '529', value: 'unassigned' },
  { label: '530', value: 'See Also From Tracing - Uniform Title (R)' },
  { label: '531', value: 'unassigned' },
  { label: '546', value: 'unassigned' },
  { label: '547', value: 'See Also From Tracing - Named Event (R)' },
  { label: '548', value: ' See Also From Tracing - Chronological Term (R)' },
  { label: '549', value: 'unassigned' },
  { label: '550', value: ' See Also From Tracing - Topical Term (R)' },
  { label: '551', value: 'See Also From Tracing - Geographic Name (R)' },
  { label: '552', value: 'unassigned' },
  { label: '554', value: 'unassigned' },
  { label: '555', value: 'See Also From Tracing - Genre/Form Term (R)' },
  { label: '556', value: 'unassigned' },
  { label: '561', value: 'unassigned' },
  { label: '562', value: 'See Also From Tracing - Medium of Performance Term (R)' },
  { label: '563', value: 'unassigned' },
  { label: '579', value: 'unassigned' },
  { label: '580', value: 'See Also From Tracing - General Subdivision (R)' },
  { label: '581', value: 'See Also From Tracing - Geographic Subdivision (R)' },
  { label: '582', value: 'See Also From Tracing - Chronological Subdivision (R)' },
  { label: '583', value: 'unassigned' },
  { label: '584', value: 'unassigned' },
  { label: '585', value: 'See Also From Tracing - Form Subdivision (R)' },
  { label: '586', value: 'unassigned' },
  { label: '599', value: 'unassigned' },
  { label: '600', value: 'unassigned' },
  { label: '639', value: 'unassigned' },
  { label: '640', value: 'Series Dates of Publication and/or Sequential Designation (R)' },
  { label: '641', value: 'Series Numbering Peculiarities (R)' },
  { label: '642', value: 'Series Numbering Example (R)' },
  { label: '643', value: 'Series Place and Publisher/Issuing Body (R)' },
  { label: '644', value: 'Series Analysis Practice (R)' },
  { label: '645', value: 'Series Tracing Practice (R)' },
  { label: '646', value: 'Series Classification Practice (R)' },
  { label: '647', value: 'unassigned' },
  { label: '649', value: 'unassigned' },
  { label: '650', value: 'unassigned' },
  { label: '662', value: 'unassigned' },
  { label: '663', value: 'Complex See Also Reference - Name (NR)' },
  { label: '664', value: 'Complex See Reference - Name (NR)' },
  { label: '665', value: 'History Reference (NR)' },
  { label: '666', value: 'General Explanatory Reference - Name (NR)' },
  { label: '667', value: 'Nonpublic General Note (R)' },
  { label: '668', value: 'Note - Characters in Nonroman Alphabets' },
  { label: '669', value: 'unassigned' },
  { label: '670', value: 'Source Data Found (R)' },
  { label: '671', value: 'Note - Work Catalogued (Names/Titles)' },
  { label: '672', value: 'Title Related to the Entity (R)' },
  { label: '673', value: 'Title Not Related to the Entity (R)' },
  { label: '674', value: 'unassigned' },
  { label: '675', value: 'Source Data Not Found (NR)' },
  { label: '676', value: 'Note - Cataloging Rules (Names/Titles)' },
  { label: '677', value: 'Definition  (R)' },
  { label: '678', value: 'Biographical or Historical Data (R)' },
  { label: '679', value: 'unassigned' },
  { label: '680', value: 'Public General Note (R)' },
  { label: '681', value: 'Subject Example Tracing Note (R)' },
  { label: '682', value: 'Deleted Heading Information (NR)' },
  { label: '683', value: 'unassigned' },
  { label: '684', value: 'unassigned' },
  { label: '685', value: 'Note - Source Data Found (Subjects)' },
  { label: '686', value: 'Note - Source Data Not Found (Subjects)' },
  { label: '687', value: 'Note - Usage (Subjects)' },
  { label: '688', value: 'Application History Note (R)' },
  { label: '689', value: 'unassigned' },
  { label: '699', value: 'unassigned' },
  { label: '700', value: 'Established Heading Linking Entry - Personal Name (R)' },
  { label: '701', value: 'unassigned' },
  { label: '709', value: 'unassigned' },
  { label: '710', value: 'Established Heading Linking Entry - Corporate Name (R)' },
  { label: '711', value: 'Established Heading Linking Entry - Meeting Name (R)' },
  { label: '712', value: 'unassigned' },
  { label: '729', value: 'unassigned' },
  { label: '730', value: 'Established Heading Linking Entry - Uniform Title (R)' },
  { label: '731', value: 'unassigned' },
  { label: '746', value: 'unassigned' },
  { label: '747', value: 'Established Heading Linking Entry - Named Event (R)' },
  { label: '748', value: 'Established Heading Linking Entry - Chronological Term (R)' },
  { label: '749', value: 'unassigned' },
  { label: '750', value: 'Established Heading Linking Entry - Topical Term (R)' },
  { label: '751', value: 'Established Heading Linking Entry - Geographic Name (R)' },
  { label: '752', value: 'unassigned' },
  { label: '754', value: 'unassigned' },
  { label: '755', value: 'Established Heading Linking Entry - Genre/Form Term (R)' },
  { label: '756', value: 'unassigned' },
  { label: '761', value: 'unassigned' },
  { label: '762', value: 'Established Heading Linking Entry - Medium of Performance Term (R)' },
  { label: '763', value: 'unassigned' },
  { label: '779', value: 'unassigned' },
  { label: '780', value: 'Subdivision Linking Entry - General Subdivision (R)' },
  { label: '781', value: 'Subdivision Linking Entry - Geographic Subdivision (R)' },
  { label: '782', value: 'Subdivision Linking Entry - Chronological Subdivision (R)' },
  { label: '783', value: 'unassigned' },
  { label: '784', value: 'unassigned' },
  { label: '785', value: 'Subdivision Linking Entry - Form Subdivision (R)' },
  { label: '786', value: 'unassigned' },
  { label: '787', value: 'unassigned' },
  { label: '788', value: 'Complex Linking Entry Data (NR)' },
  { label: '789', value: 'unassigned' },
  { label: '799', value: 'unassigned' },
  { label: '800', value: 'unassigned' },
  { label: '855', value: 'unassigned' },
  { label: '856', value: 'Electronic Location and Access (R)' },
  { label: '857', value: 'unassigned' },
  { label: '879', value: 'unassigned' },
  { label: '880', value: 'Alternate Graphic Representation (R)' },
  { label: '881', value: 'unassigned' },
  { label: '882', value: 'unassigned' },
  { label: '883', value: 'Machine-generated Metadata Provenance (R)' },
  { label: '884', value: 'value Conversion Information (R)' },
  { label: '885', value: 'Matching Information (R)' },
  { label: '886', value: 'unassigned' },
  { label: '899', value: 'unassigned' },
  { label: '001', value: 'Control Number  (NR)' },
  { label: '002', value: 'unassigned' },
  { label: '003', value: 'Control Number Identifier  (NR)' },
  { label: '004', value: 'unassigned' },
  { label: '005', value: 'Date and Time of Latest Transaction  (NR)' },
  { label: '006', value: 'unassigned' },
  { label: '007', value: 'unassigned' },
  { label: '008', value: 'Fixed-Length Data Elements  (NR)' },
  { label: '009', value: 'unassigned' },
  { label: '010', value: 'Library of Congress Control Number  (NR)' },
  { label: '011', value: 'unassigned' },
  { label: '013', value: 'unassigned' },
  { label: '014', value: 'Link to Bibliographic Record for Serial or Multipart Item (R)' },
  { label: '015', value: 'unassigned' },
  { label: '016', value: 'National Bibliographic Agency Control Number (R)' },
  { label: '017', value: 'unassigned' },
  { label: '019', value: 'unassigned' },
  { label: '020', value: 'International Standard Book Number (R)' },
  { label: '021', value: 'unassigned' },
  { label: '022', value: 'International Standard Serial Number (R)' },
  { label: '023', value: 'unassigned' },
  { label: '024', value: 'Other Standard Identifier (R)' },
  { label: '025', value: 'unassigned' },
  { label: '030', value: 'unassigned' },
  { label: '031', value: 'Musical Incipits Information (R)' },
  { label: '032', value: 'unassigned' },
  { label: '033', value: 'unassigned' },
  { label: '034', value: 'labeld Cartographic Mathematical Data (R)' },
  { label: '035', value: 'System Control Number (R)' },
  { label: '036', value: 'unassigned' },
  { label: '039', value: 'unassigned' },
  { label: '040', value: 'Cataloging Source (NR)' },
  { label: '041', value: 'unassigned' },
  { label: '042', value: 'Authentication label (NR)' },
  { label: '043', value: 'Geographic Area label (NR)' },
  { label: '044', value: 'unassigned' },
  { label: '045', value: 'Time Period of Heading (NR)' },
  { label: '046', value: 'Special labeld Dates (R)' },
  { label: '047', value: 'unassigned' },
  { label: '049', value: 'unassigned' },
  { label: '050', value: 'Library of Congress Call Number (R)' },
  { label: '051', value: 'unassigned' },
  { label: '052', value: 'Geographic Classification (R)' },
  { label: '053', value: 'LC Classification Number (R)' },
  { label: '054', value: 'unassigned' },
  { label: '055', value: 'Library and Archives Canada Call Number (R)' },
  { label: '056', value: 'unassigned' },
  { label: '057', value: 'unassigned' },
  { label: '058', value: 'LC Classification Number Assigned in Canada]' },
  { label: '059', value: 'unassigned' },
  { label: '060', value: 'National Library of Medicine Call Number (R)' },
  { label: '061', value: 'unassigned' },
  { label: '062', value: 'unassigned' },
  { label: '063', value: 'NLM Classification Number Assigned by NLM' },
  { label: '064', value: 'unassigned' },
  { label: '065', value: 'Other Classification Number (R)' },
  { label: '066', value: 'Character Sets Present (NR)' },
  { label: '067', value: 'unassigned' },
  { label: '068', value: 'NLM Classification Number Assigned in Canada' },
  { label: '069', value: 'unassigned' },
  { label: '9XX', value: 'Equivalent Headings' },
  { label: '070', value: 'National Agricultural Library Call Number (R)' },
  { label: '071', value: 'unassigned' },
  { label: '072', value: 'Subject Category label (R)' },
  { label: '073', value: 'Subdivision Usage (NR)' },
  { label: '074', value: 'unassigned' },
  { label: '075', value: ' Type of Entity (R)' },
  { label: '076', value: 'unassigned' },
  { label: '079', value: 'unassigned' },
  { label: '080', value: 'Universal Decimal Classification Number (R)' },
  { label: '081', value: 'unassigned' },
  { label: '082', value: 'Dewey Decimal Call Number (R)' },
  { label: '083', value: ' Dewey Decimal Classification Number (R)' },
  { label: '084', value: 'unassigned' },
  { label: '085', value: 'unassigned' },
  { label: '086', value: 'Government Document Call Number (R)' },
  { label: '087', value: 'Government Document Classification Number (R)' },
  { label: '088', value: 'Document Shelving Number (CODOC)' },
  { label: '089', value: 'unassigned' },
  { label: '09X', value: 'Local Call Numbers' }
];

export default tags;