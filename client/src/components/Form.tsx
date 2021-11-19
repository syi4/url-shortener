import axios from "axios";
import { SERVER_ENDPOINTS } from "../config";
import React, { useState } from "react";
import { Input, Button, Box, InputGroup } from "@chakra-ui/react";

export const Form = () => {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        destination,
      })
      .then((res) => res.data);

    setShortUrl(result);
  };

  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://example.com"
          />
          <Button type="submit" width="200px" marginLeft="10px">
            Create Short Url
          </Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <a
          href={`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}
        >{`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}</a>
      )}
    </Box>
  );
};
