import type { AxiosError, AxiosResponse } from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import { api } from "@/api";
import { useI18n } from "./use-i18n";
import { useToast } from "./use-toast";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type RequestArgs<TRequest, TResponse> = {
  body?: TRequest;
  retryToAuth?: boolean;
  params?: Record<string, string>;
  onSuccess?: (data: TResponse, status: number) => void;
  onError?: (error: unknown) => void;
};

export const useHttp = () => {
  const toast = useToast();

  const { t } = useI18n();

  const request = async <TRequest = null, TResponse = null>(
    method: HttpMethod,
    url: string,
    args?: RequestArgs<TRequest, TResponse>,
  ) => {
    try {
      const requestBody = args?.body
        ? snakecaseKeys(args.body, { deep: true })
        : null;

      const response: AxiosResponse<TResponse> = await api.request({
        url,
        method,
        data: requestBody,
        params: args?.params,
      });

      const data = camelcaseKeys(response.data as object, {
        deep: true,
      }) as TResponse;

      args?.onSuccess?.(data, response.status);
    } catch (error) {
      const problem = error as AxiosError;

      if (!problem.response) {
        toast.error(t("unable_to_connect_to_the_server"));

        return;
      }

      const errorResponse = problem.response.data;

      args?.onError?.(errorResponse);
    }
  };

  return { request };
};
